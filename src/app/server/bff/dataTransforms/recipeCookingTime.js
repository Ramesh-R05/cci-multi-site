export default function recipeCookingTime(times) {
    const labelAlias = {
        preparation: 'preparation',
        cooking: 'cooking',
        marinating: 'marinating'
    };

    const timesFiltered = ((times && times.times) || []).filter(time => parseInt(time.minutes, 10));

    return timesFiltered.map(time => {
        const minInt = parseInt(time.minutes, 10) || 0;
        const hours = Math.floor(minInt / 60);
        const mins = minInt % 60;
        const hourFormated = hours ? `${hours} ${hours > 1 ? 'hrs' : 'hr'} ` : '';
        const minFormated = mins ? `${mins} ${mins > 1 ? 'mins' : 'min'}` : '';
        const timeFormated = `${hourFormated}${minFormated}`;

        return `${timeFormated} ${labelAlias[time.id]}${time.label ? ` ${time.label}` : ''}`;
    });
}
