import Link from 'next/link'
export default function CreatorPage({ params }: { params: { username: string } }) {
  const { username } = params
  const creator = { name: username.toUpperCase(), color: '#b07ab8', initial: username[0].toUpperCase(), bio: '限定写真や動画、ここだけの特別コンテンツをお届けします！' }
  const plans = [
    { id: 'silver', name: 'シルバープラン', price: '¥980', desc: '写真・漫画・限定記事' },
    { id: 'gold', name: 'ゴールドプラン', price: '¥2,500', desc: '限定ライブ配信・特権あり' },
    { id: 'vip', name: 'VIPプラン', price: '¥5,000', desc: '個別チャット・限定プレゼント' },
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-28 bg-purple-100 relative border-b border-purple-200">
        <Link href="/" className="absolute top-3 left-3 flex items-center gap-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7c6fc4" strokeWidth="2" width="18" height="18"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </Link>
        <div className="absolute -bottom-6 left-4">
          <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: creator.color }}>{creator.initial}</div>
        </div>
      </div>
      <div className="px-4 pt-10 pb-24">
        <h1 className="text-lg font-bold text-gray-900 mb-1">{creator.name}</h1>
        <div className="bg-purple-50 border border-purple-100 rounded-xl px-3 py-2 mb-4">
          <p className="text-xs text-gray-500">{creator.bio}</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {[{t:'限定オフショット',c:'#c9b8e8'},{t:'シークレット画像',c:'#b8c4e8'},{t:'メッセージ',c:'#d8b8e8'}].map(item => (
            <div key={item.t} className="aspect-square rounded-lg flex items-center justify-center" style={{ backgroundColor: item.c }}>
              <span className="text-white text-xs font-medium text-center px-1">{item.t}</span>
            </div>
          ))}
        </div>
        <Link href={`/plans/${username}`} className="w-full block text-center py-3 bg-purple-500 text-white font-bold rounded-xl text-sm mb-5 hover:bg-purple-700">
          ¥980 / 月からメンバーになる
        </Link>
        <div className="flex flex-col gap-3">
          {plans.map(p => (
            <Link key={p.id} href={`/plans/${username}?plan=${p.id}`} className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-purple-400">
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900">{p.name}</div>
                <div className="text-xs text-gray-500">{p.desc}</div>
              </div>
              <span className="text-sm font-bold text-purple-600">{p.price}<span className="text-xs font-normal text-gray-400">/月</span></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}