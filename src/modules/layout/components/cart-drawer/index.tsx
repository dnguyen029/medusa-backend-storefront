
"use client"

import React, { Fragment, useEffect, useRef, useState } from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { HttpTypes } from '@medusajs/types';
import { convertToLocale } from '@lib/util/money';
import Thumbnail from '@modules/products/components/thumbnail';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import DeleteButton from '@modules/common/components/delete-button';

interface CartDrawerProps {
    cart: HttpTypes.StoreCart | null | undefined;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ cart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
    const itemRef = useRef<number>(totalItems || 0);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    // Auto-open when items added
    useEffect(() => {
        if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
            open();
        }
        itemRef.current = totalItems;
    }, [totalItems, pathname]);

    const subtotal = cart?.subtotal ?? 0;

    return (
        <>
            <button
                onClick={open}
                className="hover:text-ui-fg-base flex items-center gap-2 transition-colors relative"
                data-testid="nav-cart-link"
            >
                Cart ({totalItems})
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[60]" onClose={close}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-m3-coffee/20 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col bg-m3-oat shadow-2xl">
                                            <div className="flex px-4 py-6 sm:px-6 justify-between items-center border-b border-m3-clay">
                                                <h2 className="text-3xl luxury-serif text-m3-coffee">Your Curated Collection</h2>
                                                <button
                                                    type="button"
                                                    className="rounded-full p-2 text-m3-coffee/60 hover:text-m3-coffee hover:bg-m3-clay transition-colors"
                                                    onClick={close}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <X size={24} />
                                                </button>
                                            </div>

                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                {!cart || cart.items?.length === 0 ? (
                                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                                        <p className="text-m3-terracotta/70 italic mb-6">Your collection is currently empty.</p>
                                                        <button onClick={close} className="text-xs font-bold uppercase tracking-widest border-b border-m3-coffee text-m3-coffee">
                                                            Discover Pieces
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-8">
                                                        {cart.items?.map((item) => (
                                                            <div key={item.id} className="flex gap-4">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-m3-clay bg-white">
                                                                    <Thumbnail
                                                                        thumbnail={item.thumbnail}
                                                                        images={item.variant?.product?.images}
                                                                        size="square"
                                                                    />
                                                                </div>

                                                                <div className="flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-m3-coffee">
                                                                            <h3 className="luxury-serif text-lg">
                                                                                <LocalizedClientLink href={`/products/${item.product_handle}`}>
                                                                                    {item.product_title}
                                                                                </LocalizedClientLink>
                                                                            </h3>
                                                                            <p className="ml-4 font-bold">
                                                                                {convertToLocale({
                                                                                    amount: item.unit_price,
                                                                                    currency_code: cart.currency_code
                                                                                })}
                                                                            </p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-m3-terracotta">{item.variant_title}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-m3-coffee/60">Qty {item.quantity}</p>

                                                                        <DeleteButton id={item.id} className="flex items-center text-m3-coffee/40 hover:text-red-500 transition-colors">
                                                                            <Trash2 size={18} />
                                                                        </DeleteButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {cart && cart.items && cart.items.length > 0 && (
                                                <div className="border-t border-m3-clay px-4 py-6 sm:px-6 bg-white/50">
                                                    <div className="flex justify-between text-base font-medium text-m3-coffee mb-8 items-end">
                                                        <p className="text-sm font-bold uppercase tracking-widest text-m3-terracotta">Investment Total</p>
                                                        <p className="text-3xl luxury-serif">
                                                            {convertToLocale({
                                                                amount: subtotal,
                                                                currency_code: cart.currency_code
                                                            })}
                                                        </p>
                                                    </div>

                                                    <LocalizedClientLink href="/cart" className="w-full">
                                                        <button className="w-full py-6 bg-m3-terracotta text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 group hover:bg-m3-coffee transition-colors">
                                                            Proceed to Checkout
                                                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                                        </button>
                                                    </LocalizedClientLink>

                                                    <div className="mt-6 flex justify-center text-center text-sm text-m3-coffee/60">
                                                        <p>
                                                            or{' '}
                                                            <button
                                                                type="button"
                                                                className="font-medium text-m3-terracotta hover:text-m3-coffee transition-colors"
                                                                onClick={close}
                                                            >
                                                                Continue Shopping
                                                                <span aria-hidden="true"> &rarr;</span>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CartDrawer;
