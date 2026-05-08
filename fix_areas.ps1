$files = @(
    "src/app/services/solar/battery-storage/page.tsx",
    "src/app/services/solar/inverter-installation/page.tsx",
    "src/app/services/solar/off-grid-solar/page.tsx",
    "src/app/services/solar/solar-repair-maintenance/page.tsx",
    "src/app/services/solar/page.tsx"
)

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $content = $content -replace 'FaCircleCheck className=\{`w-4 h-4 \$\{isClickable \? ''text-\[#FFCA08\]'' : ''text-\[#FFCA08\]/70''\}`\}', 'FaCircleCheck className="w-4 h-4 text-[#FFCA08]"'
    $content = $content -replace 'span className=\{`font-bold text-lg transition-colors \$\{isClickable \? ''text-white group-hover:text-\[#FFCA08\]'' : ''text-white''\}`\}', 'span className={`font-bold text-lg text-white transition-colors ${isClickable ? ''underline decoration-2 underline-offset-4 group-hover:text-[#FFCA08]'' : ''''}`}'
    $content = $content -replace 'className="bg-white/5 rounded-xl p-5 border border-white/5 flex flex-col gap-2 opacity-90"', 'className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col gap-2"'
    Set-Content $file $content
}

$files2 = @(
    "src/app/services/electrical-services/generator-installation/page.tsx"
)

foreach ($file in $files2) {
    $content = Get-Content $file -Raw
    $content = $content -replace 'FaCircleCheck className=\{`w-5 h-5 flex-shrink-0 \$\{isClickable \? ''text-\[#FFCA08\]'' : ''text-\[#FFCA08\]/70''\}`\}', 'FaCircleCheck className="w-5 h-5 flex-shrink-0 text-[#FFCA08]"'
    $content = $content -replace '<span className="font-bold text-white text-lg">\{location\.loc\}</span>', '<span className={`font-bold text-white text-lg ${isClickable ? ''underline decoration-2 underline-offset-4'' : ''''}`}>{location.loc}</span>'
    $content = $content -replace 'className="flex items-center gap-3 w-full justify-center md:justify-start opacity-90"', 'className="flex items-center gap-3 w-full justify-center md:justify-start"'
    Set-Content $file $content
}

$files3 = @(
    "src/app/services/electrical-services/coc/page.tsx",
    "src/app/services/electrical-services/db-board-upgrades-and-repairs/page.tsx"
)

foreach ($file in $files3) {
    $content = Get-Content $file -Raw
    $content = $content -replace 'FaCircleCheck className=\{`w-5 h-5 flex-shrink-0 \$\{isClickable \? ''text-\[#FFCA08\]'' : ''text-\[#FFCA08\]/70''\}`\}', 'FaCircleCheck className="w-5 h-5 flex-shrink-0 text-[#FFCA08]"'
    $content = $content -replace 'span className=\{`font-bold text-lg transition-colors \$\{isClickable \? ''text-white group-hover:text-\[#FFCA08\]'' : ''text-white''\}`\}', 'span className={`font-bold text-white text-lg transition-colors ${isClickable ? ''underline decoration-2 underline-offset-4 group-hover:text-[#FFCA08]'' : ''''}`}'
    $content = $content -replace 'className="flex flex-col gap-1 w-full text-center md:text-left opacity-90"', 'className="flex flex-col gap-1 w-full text-center md:text-left"'
    Set-Content $file $content
}
