const earthRadius = new SVGAnimation({
    interfacePosition: [850, 475],
});
/* 0 - 25 sec */
earthRadius.add({
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
                to: 2.5,
            },
            translate: {
                x: {
                    to: -600,
                },
                y: {
                    to: 700,
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
                    to: 125,
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
                    to: -100,
                },
            },
        },
        display: {
            range: 42,
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
                    to: -100,
                },
            },
        },
        display: {
            range: 42,
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
        x2: {
            range: [53, 54],
            value: {
                to: 500,
            },
        },
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
        x2: {
            range: [32, 33],
            value: {
                to: 500,
            },
        },
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
});

/* sun rays */

earthRadius.add({
    object: '#rays',
    animation: {
        'stroke-dashoffset': {
            range: [0, 3],
            value: t => 20 * t,
        },
    },
});

const otherRays = document.getElementsByClassName('other-rays');
[...otherRays].forEach((ray) => {
    earthRadius.add({
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

earthRadius.add({
    object: '#text-1',
    animation: {
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
});
