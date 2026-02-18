
"use client"

import React, { Fragment } from 'react';
import { X, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { usePathname } from 'next/navigation';

interface MenuSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuSidebar: React.FC<MenuSidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[60]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#2C1810]/40 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-700 sm:duration-700"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-700 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-[#FDF8F5] shadow-2xl">
                                        <div className="flex flex-col h-full p-8">
                                            <div className="flex justify-between items-center mb-16">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8D4E3F]">Navigation</span>
                                                <button
                                                    type="button"
                                                    className="p-2 hover:bg-[#F5E9E2] rounded-full transition-colors focus:outline-none"
                                                    onClick={onClose}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <X size={24} />
                                                </button>
                                            </div>

                                            <nav className="flex-1 space-y-8">
                                                {[
                                                    { label: 'The Sanctuary', href: '/', sub: 'The Home of Arch & Grain' },
                                                    { label: 'The Shop', href: '/store', sub: 'Explore our curated artifacts' },
                                                    { label: 'Our Process', href: '/process', sub: 'How we marry Arch and Grain' },
                                                    { label: 'The Studio', href: '/about', sub: 'Our origin & philosophy' },
                                                    { label: 'Bespoke Inquiry', href: '/contact', sub: 'Custom architectural solutions' }
                                                ].map((link, idx) => (
                                                    <div
                                                        key={link.label}
                                                        className="group w-full text-left animate-in slide-in-from-left duration-700"
                                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                                    >
                                                        <LocalizedClientLink
                                                            href={link.href}
                                                            className="flex items-end justify-between border-b border-[#2C1810]/5 pb-4 group-hover:border-[#8D4E3F] transition-colors w-full block"
                                                            onClick={onClose}
                                                        >
                                                            <div>
                                                                <h3 className="text-4xl luxury-serif group-hover:text-[#8D4E3F] transition-colors">{link.label}</h3>
                                                                <p className="text-[10px] uppercase font-bold tracking-widest text-[#2C1810]/40 mt-2">{link.sub}</p>
                                                            </div>
                                                            <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#8D4E3F]" size={24} />
                                                        </LocalizedClientLink>
                                                    </div>
                                                ))}
                                            </nav>

                                            <div className="pt-12 border-t border-[#F5E9E2]">
                                                <div className="flex gap-6 mb-8 text-[#2C1810]/40">
                                                    <Instagram size={20} className="hover:text-[#8D4E3F] cursor-pointer transition-colors" />
                                                    <Twitter size={20} className="hover:text-[#8D4E3F] cursor-pointer transition-colors" />
                                                    <Facebook size={20} className="hover:text-[#8D4E3F] cursor-pointer transition-colors" />
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#8D4E3F]">The Studio</h4>
                                                    <p className="text-sm text-[#2C1810]/60 leading-relaxed font-light italic">
                                                        124 Grain St, Pacific Northwest <br />
                                                        studio@archandgrain.co
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default MenuSidebar;
