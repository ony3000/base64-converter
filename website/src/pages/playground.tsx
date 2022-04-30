import React from 'react';
import Layout from '@theme/Layout';
import DemoConverter from '@site/src/components/DemoConverter';

export default function Playground(): JSX.Element {
  return (
    <Layout
      title="Playground"
      description="Base64 converter playground."
    >
      <main>
        <DemoConverter />
      </main>
    </Layout>
  );
}
