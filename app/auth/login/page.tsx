'use client'
import Link from 'next/link'
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-purple-200">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-lg" />
          <span className="text-2xl font-bold text-purple-800">OFFSHOT</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-5 text-center">ログイン</h1>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="メールアドレス" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500"/>
          <input type="password" placeholder="パスワード" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500"/>
          <button className="w-full py-3 bg-purple-500 text-white font-bold rounded-xl text-sm hover:bg-purple-700">ログイン</button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          アカウントをお持ちでない方は <Link href="/auth/signup" className="text-purple-600 font-medium">新規登録</Link>
        </p>
      </div>
    </div>
  )
}