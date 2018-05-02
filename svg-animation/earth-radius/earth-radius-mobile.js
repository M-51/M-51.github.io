const earthRadiusMobile = new SVGAnimation({
    interfacePosition: [450, 950],
});
/* 0 - 25 sec */
earthRadiusMobile.add({
    object: '#earth-group',
    animation: {
        transform: [{
            range: [3, 4],
            scale: {
                to: 1,
            },
            translate: {
                x: {
                    to: 0,
                },
                y: {
                    to: 300,
                },
            },
        }, {
            range: [25, 26],
            scale: {
                to: 1.5,
            },
            translate: {
                y: {
                    to: 450,
                },
                x: {
                    to: -100,
                },
            },
        }, {
            range: [41, 42],
            scale: {
                to: 3,
            },
            translate: {
                x: {
                    to: -800,
                },
                y: {
                    to: 800,
                },
            },
        }, {
            range: [52, 53],
            scale: {
                to: 1,
            },
            translate: {
                x: {
                    to: 100,
                },
                y: {
                    to: 300,
                },
            },
        }, {
            range: [76, 77],
            scale: {
                to: 0.6,
            },
            translate: {
                x: {
                    to: 290,
                },
                y: {
                    to: 220,
                },
            },
        }],
    },
}, {
    object: '#cancer-line',
    animation: {
        y1: [{
            range: [4, 4.25],
            value: {
                to: -100,
            },
        }, {
            range: [24, 24.25],
            value: {
                to: 0,
            },
        }],
        y2: [{
            range: [4, 4.25],
            value: {
                to: 100,
            },
        }, {
            range: [24, 24.25],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#arc',
    animation: {
        'stroke-dashoffset': [{
            range: [4, 4.25],
            value: {
                to: 0,
            },
        }, {
            range: [24, 24.25],
            value: {
                to: -50,
            },
        }],
    },
}, {
    object: '#angle-dot',
    animation: {
        display: [{
            range: 4.25,
            value: 'block',
        }, {
            range: 24,
            value: 'none',
        }],
    },
}, {
    object: '#cancer',
    animation: {
        opacity: {
            range: [53, 54],
            value: {
                from: 1,
                to: 0,
            },
        },
    },
}, {
    object: '#cancer-ray',
    animation: {
        x1: [{
            range: [4, 4.25],
            value: {
                to: 400,
            },
        }, {
            range: [53, 54],
            value: {
                to: 500,
            },
        }, {
            range: [64, 65],
            value: {
                to: 600,
            },
        }],
        x2: {
            range: [24, 25],
            value: {
                to: 600,
            },
        },
    },
}, {
    object: '#cancer-text',
    animation: {
        transform: [{
            range: [3, 4],
            translate: {
                x: {
                    to: 150,
                },
            },
        }, {
            range: [25, 26],
            translate: {
                x: {
                    to: 0,
                },
            },
        }],
        'font-size': {
            range: [3, 4],
            value: {
                to: 22,
            },
        },
        display: {
            range: 42,
            value: 'none',
        },
    },
}, {
    object: '#capricorn',
    animation: {
        opacity: {
            range: [53, 54],
            value: {
                from: 1,
                to: 0,
            },
        },
    },
}, {
    object: '#capricorn-text',
    animation: {
        transform: {
            range: [3, 4],
            translate: {
                x: {
                    to: -200,
                },
            },
        },
        display: {
            range: 4,
            value: 'none',
        },
    },
}, {
    object: '#equator-text',
    animation: {
        transform: {
            range: [3, 4],
            translate: {
                x: {
                    to: -200,
                },
            },
        },
        display: {
            range: 4,
            value: 'none',
        },
    },
}, {
    object: '#syene-group',
    animation: {
        opacity: [{
            range: [10, 11],
            value: {
                to: 1,
            },
        }, {
            range: [41, 42],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#syene-dot',
    animation: {
        r: {
            range: [10, 11],
            value: {
                to: 10,
            },
        },
        display: {
            range: 12,
            value: 'none',
        },
    },
}, {
    object: '#syene-stick',
    animation: {
        x1: {
            range: [53, 54],
            value: {
                to: 0,
            },
        },
        x2: [{
            range: [53, 54],
            value: {
                to: 500,
            },
        }, {
            range: [66, 67],
            value: {
                to: 400,
            },
        }],
    },
}, {
    object: '#alexandria-dot',
    animation: {
        r: {
            range: [27, 28],
            value: {
                to: 10,
            },
        },
        display: {
            range: 31,
            value: 'none',
        },
    },
}, {
    object: '#alexandria-group',
    animation: {
        opacity: [{
            range: [27, 28],
            value: {
                to: 1,
            },
        }, {
            range: [41, 42],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#alexandria-stick',
    animation: {
        x2: [{
            range: [32, 33],
            value: {
                to: 500,
            },
        }, {
            range: [66, 67],
            value: {
                to: 400,
            },
        }],
        x1: {
            range: [53, 54],
            value: {
                to: 0,
            },
        },
    },
}, {
    object: '#alexandria-ray',
    animation: {
        x1: [{
            range: [32, 33],
            value: {
                to: 396,
            },
        }, {
            range: [64, 65],
            value: {
                to: 596,
            },
        }],
        x2: {
            range: [32, 33],
            value: {
                to: 596,
            },
        },
    },
}, {
    object: '#alexandria-shadow',
    animation: {
        opacity: [{
            range: [33, 34],
            value: {
                to: 0.5,
            },
        }, {
            range: [64, 65],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#alexandria-angle',
    animation: {
        opacity: [{
            range: [41, 42],
            value: {
                to: 1,
            },
        }, {
            range: [64, 65],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#arc-1',
    animation: {
        opacity: {
            range: [56, 57],
            value: {
                to: 0.5,
            },
        },
    },
}, {
    object: '#arc-1-angle',
    animation: {
        opacity: {
            range: [56.5, 57.5],
            value: {
                to: 1,
            },
        },
    },
}, {
    object: '#distance',
    animation: {
        opacity: {
            range: [70, 71],
            value: {
                to: 1,
            },
        },
    },
});

/* sun rays */

earthRadiusMobile.add({
    object: '#rays',
    animation: {
        'stroke-dashoffset': {
            range: [0, 3],
            value: t => 20 * t,
        },
    },
});

const otherRaysMobile = document.getElementsByClassName('other-rays');
[...otherRaysMobile].forEach((ray) => {
    earthRadiusMobile.add({
        object: ray,
        animation: {
            opacity: {
                range: [3, 4],
                value: {
                    from: 1,
                    to: 0,
                },
            },
        },
    });
});

earthRadiusMobile.add({
    object: '#text-1',
    animation: {
        display: {
            range: 3,
            value: 'none',
        },
        opacity: {
            range: [2, 3],
            value: {
                from: 1,
                to: 0,
            },
        },
    },
}, {
    object: '#text-2',
    animation: {
        display: [{
            range: 3,
            value: 'block',
        }, {
            range: 25,
            value: 'none',
        }],
        opacity: [{
            range: [3, 4],
            value: {
                to: 1,
            },
        }, {
            range: [24, 25],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-3',
    animation: {
        display: [{
            range: 10,
            value: 'block',
        }, {
            range: 25,
            value: 'none',
        }],
        opacity: [{
            range: [10, 11],
            value: {
                to: 1,
            },
        }, {
            range: [24, 25],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-4',
    animation: {
        display: [{
            range: 16,
            value: 'block',
        }, {
            range: 25,
            value: 'none',
        }],
        opacity: [{
            range: [16, 17],
            value: {
                to: 1,
            },
        }, {
            range: [24, 25],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-5',
    animation: {
        display: [{
            range: 27,
            value: 'block',
        }, {
            range: 41,
            value: 'none',
        }],
        opacity: [{
            range: [27, 28],
            value: {
                to: 1,
            },
        }, {
            range: [40, 41],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-6',
    animation: {
        display: [{
            range: 32,
            value: 'block',
        }, {
            range: 41,
            value: 'none',
        }],
        opacity: [{
            range: [32, 33],
            value: {
                to: 1,
            },
        }, {
            range: [40, 41],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-7',
    animation: {
        display: [{
            range: 42,
            value: 'block',
        }, {
            range: 51,
            value: 'none',
        }],
        opacity: [{
            range: [42, 43],
            value: {
                to: 1,
            },
        }, {
            range: [50, 51],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-8',
    animation: {
        display: [{
            range: 53,
            value: 'block',
        }, {
            range: 65,
            value: 'none',
        }],
        opacity: [{
            range: [53, 54],
            value: {
                to: 1,
            },
        }, {
            range: [64, 65],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-9',
    animation: {
        display: [{
            range: 56,
            value: 'block',
        }, {
            range: 65,
            value: 'none',
        }],
        opacity: [{
            range: [56, 57],
            value: {
                to: 1,
            },
        }, {
            range: [64, 65],
            value: {
                to: 0,
            },
        }],
    },
}, {
    object: '#text-10',
    animation: {
        display: {
            range: 66,
            value: 'block',
        },
        opacity: {
            range: [66, 67],
            value: {
                to: 1,
            },
        },
    },
}, {
    object: '#text-11',
    animation: {
        display: {
            range: 71,
            value: 'block',
        },
        opacity: {
            range: [71, 72],
            value: {
                to: 1,
            },
        },
    },
}, {
    object: '#text-12',
    animation: {
        display: {
            range: 75,
            value: 'block',
        },
        opacity: {
            range: [75, 76],
            value: {
                to: 1,
            },
        },
    },
});

const groupMobile = document.createElementNS('http://www.w3.org/2000/svg', 'g');
// group.setAttributeNS(null, 'stroke', 'none');
groupMobile.setAttributeNS(null, 'fill', '#f66');
document.getElementById('earth-group').appendChild(groupMobile);


for (let i = 1; i < 50; i += 1) {
    const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arc.setAttributeNS(null, 'display', 'none');
    arc.setAttributeNS(null, 'd', 'M0 0 L 400 0 A 400 400 0 0 0 397 -50');
    arc.setAttributeNS(null, 'opacity', '0.125');
    arc.setAttributeNS(null, 'transform', `rotate(${-23 - (i * 7.2)})`);
    groupMobile.appendChild(arc);

    earthRadiusMobile.add({
        object: arc,
        animation: {
            display: {
                range: 76 + (i * 0.1),
                value: 'block',
            },
        },
    });
}

const distanceTextMobile = document.getElementById('distance-text');

earthRadiusMobile.add({
    object: distanceTextMobile,
    animation: {
        'font-size': [{
            range: [76, 77],
            value: {
                to: 36,
            },
        }, {
            range: 1,
            value: () => {
                distanceTextMobile.innerHTML = '800 km';
                return 22;
            },
        }],
    },
});

earthRadiusMobile.add({
    object: '#distance-line',
    animation: {
        d: {
            range: [76, 81],
            local: true,
            value: (t) => {
                const angle = (-71.5 * t) * (Math.PI / 180);
                const x = Math.cos(angle) * 420;
                const y = Math.sin(angle) * 420;
                distanceTextMobile.innerHTML = `${Math.round(800 + (t * 7840))} km`;
                return `M${x} ${y} A 420 420 0 ${angle > -Math.PI ? 0 : 1} 1 420 0`;
            },
        },
    },
});

