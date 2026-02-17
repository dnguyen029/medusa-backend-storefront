import { notFound } from 'next/navigation';

export const metadata = {
    title: 'Sanity Connection Test',
    description: 'Testing the connection to Sanity CMS',
};

async function getSanityData(query: string) {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const apiVersion = '2023-05-03';

    if (!projectId) {
        throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
    }

    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

    const res = await fetch(url, {
        next: { revalidate: 0 } // Disable cache for testing
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.description || errorData.message || res.statusText);
    }

    const data = await res.json();
    return data.result;
}

export default async function SanityTestPage({
    params,
}: {
    params: Promise<{ countryCode: string }>;
}) {
    const { countryCode } = await params;

    // Query to count all documents and list types
    // This helps us see if the dataset is empty or just has different types
    const query = `{
    "totalDocuments": count(*),
    "types": *[_type != "system.group"] | order(_type) [0...20] { _type, title, _id }
  }`;

    let result: any = { totalDocuments: 0, types: [] };
    let error = null;

    try {
        result = await getSanityData(query);
    } catch (err: any) {
        console.error('Sanity fetch error:', err);
        error = err.message;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Sanity Connection Test</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Configuration:</h2>
                <ul className="list-disc pl-5 font-mono text-sm">
                    <li><strong>Project ID:</strong> {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}</li>
                    <li><strong>Dataset:</strong> {process.env.NEXT_PUBLIC_SANITY_DATASET}</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Status:</h2>
                {error ? (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
                        <p className="font-bold">❌ Error connecting to Sanity:</p>
                        <pre className="mt-2 whitespace-pre-wrap text-sm">{error}</pre>
                    </div>
                ) : (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
                        <p className="font-bold">✅ Connection Successful!</p>
                        <p className="text-lg mt-2">Total Documents Found: <strong>{result.totalDocuments}</strong></p>
                    </div>
                )}
            </div>

            {result.types && result.types.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Document Types Found:</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Type</th>
                                    <th className="py-2 px-4 border-b text-left">ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.types.map((doc: any) => (
                                    <tr key={doc._id}>
                                        <td className="py-2 px-4 border-b font-mono text-sm">{doc._type}</td>
                                        <td className="py-2 px-4 border-b font-mono text-xs text-gray-500">{doc._id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                        * Note: If you see types but no "product" types, we might need to sync Medusa products to Sanity or create them manually.
                    </p>
                </div>
            )}

            <div className="mt-8 pt-4 border-t text-sm text-gray-500">
                <p>Current Country: {countryCode}</p>
            </div>
        </div>
    );
}
