export function pick() {
    const body = document.body;
    const hueDiv = document.createElement('div');
    hueDiv.className = 'hue text';
    const luminosityDiv = document.createElement('div');
    luminosityDiv.className = 'luminosity text';
    const rgbDiv = document.createElement('div');
    rgbDiv.className = 'rgb';

    body.appendChild(hueDiv);
    body.appendChild(luminosityDiv);
    body.appendChild(rgbDiv);

    function hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    function updateBackgroundAndInfo(e) {
        const x = e.clientX;
        const y = e.clientY;

        const hue = Math.round((x / window.innerWidth) * 360);
        const luminosity = Math.round((y / window.innerHeight) * 100);

        const [r, g, b] = hslToRgb(hue, 50, luminosity);
        const rgbValue = `rgb(${r}, ${g}, ${b})`;

        body.style.backgroundColor = rgbValue;
        body.style.background = rgbValue; // Set both backgroundColor and background

        hueDiv.textContent = `Hue: ${hue}`;
        luminosityDiv.textContent = `Luminosity: ${luminosity}%`;
        rgbDiv.textContent = rgbValue;
    }

    body.addEventListener('mousemove', updateBackgroundAndInfo);

    body.addEventListener('click', () => {
        const rgbValue = rgbDiv.textContent;
        navigator.clipboard.writeText(rgbValue).then(() => {
            alert(`Copied to clipboard: ${rgbValue}`);
        });
    });

    // Initial update
    updateBackgroundAndInfo({ clientX: 0, clientY: 0 });
}