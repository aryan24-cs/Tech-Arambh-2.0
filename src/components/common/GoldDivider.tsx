export default function GoldDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center py-6 md:py-10 opacity-70 ${className}`}>
            <div className="flex items-center gap-4 w-full max-w-[300px]">
                {/* Left Line */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-tech-blue/50 to-tech-blue" />

                {/* Center Core */}
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 border border-tech-blue rotate-45" />
                    <div className="w-1.5 h-1.5 bg-tech-blue rotate-45" />
                    <div className="w-1.5 h-1.5 border border-tech-blue rotate-45" />
                    <div className="w-1.5 h-1.5 bg-tech-blue rotate-45" />
                    <div className="w-2 h-2 border border-tech-blue rotate-45" />
                </div>

                {/* Right Line */}
                <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-tech-blue/50 to-tech-blue" />
            </div>
        </div>
    );
}
