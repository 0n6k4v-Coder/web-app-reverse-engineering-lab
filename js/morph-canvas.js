(() => {
        const C = {
            precision: 800,
            duration: 900,
            lineColor: '--_theme---5',
            lineWidth: 2,
            startPointBIndex: 330,
            scaleMultiplier: 1.8,
            finalOpacity: 0,
            spamInterval: 50,
            centerX: 0,
            centerY: 0
        };
        const pA = "M218.699 4.49264C226.495 4.51754 233.934 9.47589 236.387 16.9625L236.39 16.9731L236.395 16.984C237.763 20.596 237.853 24.5611 236.74 28.2608L236.629 28.6173C235.686 31.379 234.103 34.3409 232.007 36.4272L232.001 36.4323L231.995 36.4386L200.16 70.2819L199.839 70.6231L200.159 70.9652L232.156 105.182L232.161 105.188L232.167 105.194C234.723 107.761 236.401 111.458 237.082 114.882L237.082 114.883C237.854 118.93 237.191 123.202 235.102 126.948L235.097 126.957L235.093 126.965C232.08 132.913 224.949 136.606 218.183 136.813L217.529 136.822L160.438 136.698C155.628 136.684 150.347 134.763 146.987 131.385L146.976 131.375L98.8022 85.8273C96.9572 83.9753 94.209 82.8982 91.6036 82.7686L91.0846 82.7554L63.2804 82.6911L63.2677 82.6917C63.2644 82.6917 63.2528 82.6911 63.2285 82.6909C63.199 82.6907 63.1568 82.6909 63.104 82.6903C62.9986 82.6892 62.8493 82.687 62.6624 82.6844C62.2884 82.6794 61.7644 82.6717 61.1409 82.6617C59.8936 82.6418 58.248 82.6129 56.6094 82.5774C54.9703 82.5419 53.3397 82.5001 52.1199 82.4545C51.5092 82.4316 51.006 82.4075 50.6575 82.3836C50.6235 82.3813 50.5915 82.3768 50.5611 82.3745L50.5613 82.3309L50.0862 82.3087L20.6021 80.9523L20.5907 80.9523L20.5801 80.9526C10.6586 80.9298 2.55473 71.5945 2.57767 61.5875L2.66298 23.2552L2.66331 23.2543C2.67185 17.2907 5.5698 11.2138 9.98477 7.95274L9.99328 7.94648L10.0005 7.94081C13.0097 5.52879 16.886 4.06238 21.1087 4.06694L21.1081 4.06569L94.0441 4.22185L94.0435 4.2206C104.031 4.24355 112.778 12.3724 112.755 22.3119L112.755 22.3233L112.959 31.5282C112.964 36.4149 119.138 38.8206 122.573 35.4005L149.334 9.63863L149.341 9.63262C152.729 6.25674 157.67 4.35886 162.469 4.37277L218.699 4.49172L218.699 4.49264Z";
        const pB = "M161.865 444.922L257.038 181.656L302.064 57.2436C312.8 27.6041 345.65 12.2158 375.297 22.9323L1028.04 258.916L1028.04 258.914C1028.07 258.925 1054.6 268.532 1081.12 278.142C1094.38 282.947 1107.64 287.752 1117.58 291.361C1122.55 293.165 1126.69 294.669 1129.59 295.725C1131.04 296.252 1132.17 296.667 1132.95 296.952C1133.24 297.059 1133.48 297.148 1133.67 297.217L1133.67 297.223L1134.14 297.394L1167.58 309.544L1167.58 309.545L1210.27 324.997L1210.27 324.997L1343.35 372.934L1396.41 392.076L1596.47 464.402L1596.71 464.49C1596.87 464.548 1597.11 464.635 1597.42 464.747C1598.04 464.972 1598.95 465.3 1600.11 465.72C1602.43 466.558 1605.74 467.756 1609.71 469.194C1617.65 472.069 1628.24 475.904 1638.83 479.739C1649.42 483.575 1660.01 487.411 1667.95 490.292C1671.92 491.732 1675.23 492.934 1677.55 493.777C1678.7 494.198 1679.61 494.53 1680.23 494.756C1680.52 494.859 1680.74 494.94 1680.9 494.998L1680.9 495.004L1681.19 495.11C1710.58 505.767 1725.96 538.177 1715.71 567.645L1715.47 568.341C1715.41 568.499 1709.59 584.57 1703.78 600.637C1700.86 608.708 1697.93 616.779 1695.74 622.832C1694.65 625.858 1693.73 628.381 1693.09 630.146C1692.78 631.028 1692.52 631.722 1692.35 632.195C1692.27 632.431 1692.2 632.612 1692.16 632.735L1692.09 632.919L1692.09 632.92L1575.13 955.884L1462.29 1268.58L1462.22 1268.8C1462.16 1268.94 1462.09 1269.15 1461.99 1269.42C1461.79 1269.97 1461.5 1270.78 1461.13 1271.8C1460.39 1273.85 1459.33 1276.78 1458.06 1280.3C1455.52 1287.33 1452.14 1296.7 1448.75 1306.08C1445.37 1315.45 1441.98 1324.83 1439.44 1331.86C1438.17 1335.38 1437.11 1338.31 1436.37 1340.36C1436 1341.39 1435.71 1342.19 1435.51 1342.74C1435.41 1343.02 1435.34 1343.23 1435.28 1343.37L1435.21 1343.59C1424.57 1373.01 1392.17 1388.42 1362.7 1378.22L1362.01 1377.98L1210.65 1323.32L814.956 1180.27L709.151 1141.98L284.161 988.046L232.584 969.379L56.4396 905.704C26.811 894.994 11.3388 862.144 22.0575 832.521L92.3359 637.591L92.5045 637.122L92.5008 637.121C92.5105 637.093 92.5203 637.065 92.5309 637.035C92.6607 636.671 92.8538 636.129 93.1069 635.424C93.6132 634.012 94.3584 631.942 95.3068 629.308C97.2036 624.04 99.9158 616.515 103.173 607.485C109.687 589.426 118.378 565.349 127.071 541.27C135.765 517.192 144.46 493.112 150.984 475.048C154.246 466.016 156.966 458.488 158.87 453.217C159.822 450.581 160.57 448.509 161.08 447.096C161.335 446.389 161.532 445.846 161.664 445.48C161.73 445.297 161.78 445.158 161.814 445.065C161.831 445.018 161.844 444.982 161.853 444.959C161.861 444.935 161.865 444.923 161.865 444.923L161.865 444.922Z";
        function getPts(d, n, s = 0) {
            const NS = "http://www.w3.org/2000/svg",
                p = document.createElementNS(NS, "path");
            p.setAttribute("d", d);
            const l = p.getTotalLength();
            let r = Array.from({
                length: n
            }, (_, i) => {
                const pt = p.getPointAtLength(i * l / n);
                return {
                    x: pt.x,
                    y: pt.y
                }
            });
            if (s > 0) {
                r = [...r.slice(s % n), ...r.slice(0, s % n)]
            }
            const sv = document.createElementNS(NS, "svg");
            sv.appendChild(p);
            document.body.appendChild(sv);
            const b = p.getBBox();
            document.body.removeChild(sv);
            const cx = b.x + b.width / 2,
                cy = b.y + b.height / 2;
            return {
                points: r.map(p => ({
                    x: p.x - cx,
                    y: p.y - cy
                })),
                width: b.width,
                height: b.height
            }
        }
        const canvas = document.getElementById('morphCanvas'),
            ctx = canvas.getContext('2d');
        let dA, dB, ptA, ptB;
        let anims = [],
            scale = 1,
            lastT = 0,
            rafId = null,
            ready = false;
        function resize() {
            const r = canvas.getBoundingClientRect();
            canvas.width = r.width * devicePixelRatio;
            canvas.height = r.height * devicePixelRatio;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(devicePixelRatio, devicePixelRatio);
            C.centerX = r.width / 2;
            C.centerY = r.height / 2;
            const mW = Math.max(dA.width, dB.width),
                mH = Math.max(dA.height, dB.height);
            scale = Math.min(r.width * C.scaleMultiplier / mW, r.height * C.scaleMultiplier / mH)
        }
        function init() {
            if (ready) return;
            ready = true;
            dA = getPts(pA, C.precision);
            dB = getPts(pB, C.precision, C.startPointBIndex);
            ptA = dA.points;
            ptB = dB.points;
            resize();
            window.addEventListener('resize', resize);
        }
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = performance.now(),
                color = getComputedStyle(canvas).getPropertyValue(C.lineColor).trim() || 'black';
            anims = anims.filter(a => {
                const t = Math.min((now - a.startTime) / C.duration, 1),
                    e = t * t;
                ctx.globalAlpha = 1 - (1 - C.finalOpacity) * t;
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = C.lineWidth;
                ctx.lineJoin = 'round';
                for (let i = 0; i < C.precision; i++) {
                    const x = (ptA[i].x + (ptB[i].x - ptA[i].x) * e) * scale,
                        y = (ptA[i].y + (ptB[i].y - ptA[i].y) * e) * scale;
                    i ? ctx.lineTo(C.centerX + x, C.centerY + y) : ctx.moveTo(C.centerX + x, C.centerY + y)
                }
                ctx.closePath();
                ctx.stroke();
                ctx.globalAlpha = 1;
                return t < 1
            });
            rafId = anims.length ? requestAnimationFrame(draw) : null
        }
        document.addEventListener('click', e => {
            if (e.target.closest('.nav_logo')) {
                init(); // no-op if the idle precompute below already ran
                const now = performance.now();
                if (now - lastT >= C.spamInterval) {
                    anims.push({
                        startTime: now
                    });
                    lastT = now;
                    if (!rafId) rafId = requestAnimationFrame(draw)
                }
            }
        });
        // Precompute the path points ahead of time, off the main interaction path,
        // so the first click doesn't pay for ~1600 getPointAtLength() calls + 2 reflows.
        if ('requestIdleCallback' in window) {
            requestIdleCallback(init, {
                timeout: 2000
            })
        } else {
            setTimeout(init, 200)
        }
    })();
