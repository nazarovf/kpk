function hitungKPK() {
    const a = parseInt(document.getElementById('num1').value);
    const b = parseInt(document.getElementById('num2').value);

    if (!a || !b || a <= 0 || b <= 0) {
        document.getElementById('result').textContent = 'Masukkan angka valid!';
        return;
    }

    // Fungsi untuk menghitung KPK
    const range = (start, stop, step) => {
        const arr = [];
        for (let i = start; i <= stop; i += step) {
            arr.push(i);
        }
        return arr;
    };

    const kelipatanA = new Set(range(a, a * b, a));
    const kelipatanB = new Set(range(b, a * b, b));
    const common = [...kelipatanA].filter(x => kelipatanB.has(x));
    const kpk = Math.min(...common);

    document.getElementById('result').textContent = `KPK dari ${a} dan ${b} adalah ${kpk}`;
}