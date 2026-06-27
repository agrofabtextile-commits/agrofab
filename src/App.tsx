/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AgrofabLander from "./components/AgrofabLander";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col justify-between">
      {/* 1. Human Brand Experience Lander */}
      <main className="flex-grow">
        <AgrofabLander />
      </main>
    </div>
  );
}

