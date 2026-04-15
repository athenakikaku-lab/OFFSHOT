import Link from 'next/link'
export default function HomePage() {
  const creators = [
    { username: 'yuna', name: 'YUNA', color: '#b07ab8', initial: 'Y' },
    { username: 'kenta', name: 'Kenta', color: '#7a92c4', initial: 'K' },
    { username: 'momo', name: 'Momo', color: '#9eb87a', initial: 'M' },
    { username: 'natsuki', name: 'Natsuki', color: '#c47a9e', initial: 'N' },
  ]
  const ranking = [
    { name: 'ゆいな', color: '#b07ab8', initial: 'ゆ', pct: 90 },
    { name: 'Kenta', color: '#7a92c4', initial: 'K', pct: 62 },
    { name: 'Nana', color: '#9eb87a', initial: 'N', pct: 44 },
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-50 border-b border-purple-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-purple-500 rounded-md" />
          <span className="text-lg font-bold text-purple-800">OFFSHOT</span>
        </div>
        <div className="flex gap-2">
          <Link href="/auth/login" className="text-sm px-3 py-1 text-purple-600 border border-purple-200 rounded-md hover:bg-purple-50">ログイン</Link>
          <Link href="/auth/signup" className="text-sm px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700">始める</Link>
        </div>
      </header>
      <main className="max-w-lg mx-auto px-4 py-5 pb-24">
        <h2 className="text-sm font-semibold text-gray-800 mb-3">おすすめのクリエイター</h2>
        <div className="flex gap-4 mb-6 overflow-x-auto pb-1">
          {creators.map((c) => (
            <Link key={c.username} href={`/creators/${c.username}`} className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold" style={{ backgroundColor: c.color }}>{c.initial}</div>
              <span className="text-xs text-gray-500">{c.name}</span>
            </Link>
          ))}
        </div>
        <h2 className="text-sm font-semibold text-gray-800 mb-3">人気ランキング</h2>
        <div className="flex flex-col gap-2 mb-6">
          {ranking.map((r, i) => (
            <div key={r.name} className="flex items-center gap-3 px-3 py-2 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: i===0?'#f59e0b':i===1?'#94a3b8':'#cd7c2f' }}>{i+1}</div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: r.color }}>{r.initial}</div>
              <span className="text-sm flex-1 text-gray-800">{r.name}</span>
              <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden"><div className="h-full bg-purple-500 rounded-full" style={{ width: `${r.pct}%` }} /></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}