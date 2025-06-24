'use client';
import { useEffect, useState } from 'react';
import { getBlogPosts, client } from '../../../lib/sanity';

export default function TestSanityPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function testConnection() {
      try {
        console.log('Testing Sanity connection...');
        console.log('Client config:', {
          projectId: client.config().projectId,
          dataset: client.config().dataset,
          apiVersion: client.config().apiVersion,
        });

        // Test direct client fetch
        const directResult = await client.fetch('*[_type == "blogPost"]');
        console.log('Direct fetch result:', directResult);

        // Test our helper function
        const blogPosts = await getBlogPosts();
        console.log('getBlogPosts result:', blogPosts);

        setData({ direct: directResult, helper: blogPosts });
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    testConnection();
  }, []);

  if (loading) return <div>Testing Sanity connection...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
} 