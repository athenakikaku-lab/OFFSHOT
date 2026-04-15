'use client'
import { useState } from 'react'
import Link from 'next/link'
const plans = [
  { id: 'silver', name: 'シルバープラン', price: '¥980', desc: '写真・漫画・限定記事' },
  { id: 'gold', name: 'ゴールドプラン', price: '¥2,500', desc: '限定ライブ配信・特権あり' },
  { id: 'vip', name: 'VIPプラン', price: '¥5,000', desc: '個別チャット・限定プレゼント' },
]
export default function PlansPage({ params }: { params: { creatorId: string } }) {
  const [selected, setSelected] = useState('silver')
  const current = plans.find(p => p.id === selected)!
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-50 px-4 py-3 flex items-center gap-3 border-b border-purple-200">
        <Link href={`/creators/${params.creatorId}`}><svg viewBox="0 0 24 24" fill="none" stroke="#7c6fc4" strokeWidth="2" width="18" height="18"><path d="M19 12H5M12 5l-7 7 7 7"/></svg></Link>
        <span className="text-sm font-semibold text-purple-800">プランを選択</span>
      </div>
      <div className="px-4 py-5 flex flex-col gap-3 pb-28">
        {plans.map(p => (
          <button key={p.id} onClick={() => setSelected(p.id)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${selected===p.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
            <div className="text-sm font-bold text-gray-900">{p.name}</div>
            <div className="text-base font-bold text-purple-600">{p.price} <span className="text-xs font-normal text-gray-400">/ 月</span></div>
            <div className="text-xs text-gray-500">{p.desc}</div>
          </button>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-white border-t border-gray-200">
        <button className="w-full py-3.5 bg-purple-500 text-white font-bold rounded-xl text-sm hover:bg-purple-700">
          {current.price} プランを選択して支払う →
        </button>
      </div>
    </div>
  )
}