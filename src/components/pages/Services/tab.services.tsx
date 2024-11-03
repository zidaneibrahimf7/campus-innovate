export default function TabServices({children}: Readonly<{children: React.ReactNode}>) {
    return <main className="w-full flex flex-col gap-8 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-secondary to-red-500">
        {children}
    </main>
}