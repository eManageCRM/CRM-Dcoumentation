(function () {
    var embed = new Apiary.Embed({
        "subdomain": "emanagecrm",
        preferences: {
            permalinks: false, // Allow linking into the embedded API Project                        
        },
        theme: {
            tableOfContents: { // To change color of a title in left Column
                section: {
                    title: {
                        text: {
                            color: "#00b1da"
                        }
                    }
                }
            },
            humanColumn: {
                content: {
                    section: {
                        title: {
                            text: {
                                color: "#00b1da"
                            }
                        },
                        apiDescription: {
                            table: {
                                tr: {
                                    th: {
                                        color: "#00b1da"
                                    }
                                }
                            }
                        },

                    }
                }
                // #276f9c
                //.humanColumn .humanColumnContents .humanColumnSection .humanColumnTitle .humanColumnTitleText
            },
            machineColumn: {
                console: {
                    form: {
                        buttons: {
                            submit: {
                                button: {
                                    backgroundColor: "#00b1da"
                                }
                            }
                        }
                    }
                }
            }
        }
    });

})()