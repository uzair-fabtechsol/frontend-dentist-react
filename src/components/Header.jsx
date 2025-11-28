const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white md:py-4 md:px-8 sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="text-[12px] text-[var(--accent-gold)] font-bold flex items-center gap-2">🏛️ The Dentist's Tax & Business Architecture Learning System</div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#d4af37] text-[#1a2332] rounded-full flex items-center justify-center font-bold text-[0.9rem]">DR</div>
          <span>Dr. [Your Name]</span>
        </div>
      </div>
    </header>
  )
}

export default Header
