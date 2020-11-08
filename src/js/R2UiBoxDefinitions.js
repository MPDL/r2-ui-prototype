function R2UiBoxDefinitions() {
    this.boxes = {
        recent: {
            views: {
                recent: {
                    zones: {
                        'show-ds-1': {
                            key: 'show-dataset'
                        },
                        'show-ds-2': {
                            key: 'show-dataset'
                        },
                        'show-ds-3': {
                            key: 'show-dataset'
                        }
                    }
                }
            }
        },
        globe: {},
        login: {
            close: true,
            views: {
                login: {
                    zones: {
                        register: {},
                        login: {}
                    }
                }
            }
        },
        register: {
            close: true,
            views: {
                'step-1': {
                    elements: {
                        headline: { html: 'Create new Account' },
                        'head-seperator': {},
                        'register-step-1-mail': { classes: 'scale-default' },
                        info: {
                            html: 'Please enter your email first:',
                            classes: 'text'
                        },
                        'bt-continue': {
                            html: 'Continue',
                            classes: 'button bt-ok',
                            click: true,
                            args: { view: 'step-2' }
                        }
                    }
                },
                'step-2': {
                    elements: {
                        headline: { html: 'Create new Account for:' },
                        'head-seperator': {},
                        'register-step-2': { classes: 'scale-default' },
                        'bt-send': {
                            html: 'Send Request',
                            classes: 'button bt-ok',
                            click: true,
                            args: { view: 'step-3' }
                        }
                    }
                },
                'step-3': {
                    elements: {
                        headline: { html: 'Create new Account - ready for confirmation!' },
                        'head-seperator': {},
                        info: {
                            html:
                                'You request was sended!<br/>Please click the link in the confirmation mail to validate your account.',
                            classes: 'text'
                        },
                        'bt-close': {
                            html: 'Close',
                            classes: 'button',
                            click: true
                        }
                    }
                }
            }
        },
        'login-animation': {
            events: false
        },
        'flow-show': {},
        'login-bt-top': {
            views: {
                'login-bt-top': {
                    elements: {
                        'login-start': { html: 'Login', click: true, classes: 'text' }
                    }
                }
            }
        },
        'create-dataset': {
            close: true,
            views: {
                'create-dataset': {
                    elements: {
                        headline: { html: 'Create Dataset' },
                        'head-seperator': {}
                    }
                }
            }
        },
        'my-datasets': {
            views: {
                'my-datasets': {
                    // id: 'mywork-all-list',
                    elements: {
                        headline: { html: 'My Work - all Datasets' },
                        'head-seperator': {},
                        'mywork-box-sym': {
                            classes: 'scale x50 t-l'
                        },
                        'bt-create-dataset': {
                            key: 'create-dataset',
                            click: true,
                            classes: 'scale x50 t-r'
                        },
                        'mywork-all-list': {
                            classes: 'scale x50 t-l'
                        }
                    },
                    zones: {
                        'show-dataset': {},
                        'show-history': {}
                    }
                },
                'dataset-history': {
                    elements: {
                        headline: { html: 'My Work - Dataset - History' },
                        'head-seperator': {},
                        'box-back-bt': { key: 'view-back', classes: 'scale x45 t-r', click: true }, // TODO move to abstract box definitions
                        'mywork-box-sym': {
                            classes: 'scale x50 t-l'
                        },
                        'mywork-ds-history': {
                            classes: 'scale x50 t-l'
                        }
                    }
                }
            }
        },
        dataset: {
            close: true,
            views: {
                dataset: {
                    elements: {
                        headline: { html: 'View Dataset' },
                        'head-seperator': {}
                    }
                }
            }
        },
        'inspector-nav': {
            views: {
                'inspector-nav': {
                    setBgImageOverElements: true,
                    // this 0.9 is part of the opacity:1 / transparency problem workaround
                    opacity: 0.9,
                    elements: {
                        all: {
                            classes: 'color-bg'
                        },
                        info: {
                            classes: 'color-bg'
                        },
                        'upload-new': {
                            classes: 'color-bg'
                        },
                        uploads: {
                            classes: 'color-bg'
                        },
                        statistics: {
                            classes: 'color-bg'
                        },
                        files: {
                            classes: 'color-bg'
                        }
                    },
                    zones: {
                        info: {},
                        'upload-new': {},
                        uploads: {},
                        statistics: {},
                        files: {}
                    }
                }
            }
        },
        inspector: {
            views: {
                info: {
                    elements: {
                        'isp-info': {
                            classes: 'scale x50 t-l'
                        }
                    }
                },
                'upload-new': {
                    elements: {
                        'isp-upload-start': {
                            classes: 'scale x50 t-l'
                        }
                    }
                },
                uploads: {
                    elements: {
                        'isp-uploads': {
                            classes: 'scale x50 t-l'
                        }
                    }
                },
                statistics: {
                    elements: {
                        'isp-statistics': {
                            classes: 'scale x50 t-l'
                        }
                    }
                },
                files: {
                    elements: {
                        'isp-files': {
                            classes: 'scale x50 t-l'
                        }
                    }
                }

                // files: {
                //     elements: {
                //         headline: { html: 'My Work - Dataset - History' },
                //         'head-seperator': {},
                //         'box-back-bt': { key: 'view-back', classes: 'scale x45 t-r', click: true }, // TODO move to abstract box definitions
                //         'mywork-box-sym': {
                //             classes: 'scale x50 t-l'
                //         },
                //         'mywork-ds-history': {
                //             classes: 'scale x50 t-l'
                //         }
                //     }
                // }
            }
        },
        'main-nav': {
            visible: true,
            views: {
                public: {
                    visible: true,
                    elements: {
                        'bg-1': { key: 'public', click: true, classes: 'circ-bg-sel' },
                        'sym-diamond-sel': { key: 'public', click: true },
                        'bg-2': { key: 'private', click: true, classes: 'circ-bg' },
                        'sym-circ': { key: 'private', click: true }
                    }
                },
                private: {
                    elements: {
                        'bg-1': { key: 'public', click: true, classes: 'circ-bg' },
                        'sym-diamond': { key: 'public', click: true },
                        'bg-2': { key: 'private', click: true, classes: 'circ-bg-sel' },
                        'sym-circ-sel': { key: 'private', click: true }
                    }
                }
            }
        }
    }
}

export default R2UiBoxDefinitions
