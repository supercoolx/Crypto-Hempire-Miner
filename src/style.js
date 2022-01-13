import Styled from 'styled-components';

const DashboardStyle = Styled.div`
    .people {
        margin: 40px 0;
    }

    .notification {
        background-size: contain;
        padding: 49px 10%;
        background-repeat: no-repeat;
        background-position: center;
        margin: 20px 0;
        .title {
            font-weight: 900;
            font-size: 34px;
        }
        p {
            font-weight: 600;
            font-size: 21px;
            line-height: 36px;
        }
        @media(max-width: 768px) {
            padding: 22px 4%;
            .title {
                font-size: 28px;
            }
            p {
                font-size: 13px;
                line-height: 27px;
            }
        }
    }

    
    .miners {
        .miner {
            padding: 30px 5%;
            @media(max-width: 768px) {
                padding: 30px 10%;
            }
            .detail {
                padding: 10px 0;
                .pot {
                    padding: 0 3px;
                }
                .content {
                    padding: 0;
                    p {
                        font-weight: 600;
                        font-size: 15px;
                        line-height: 22px;
                        margin: 0;
                    }
                }
            }
            .btn {
                text-transform: uppercase;
                font-weight: 900;
                font-size: 18px;
                margin: 0 auto;
                padding: 4px;
            }
        }
    }
`;

const DescriptionStyle = Styled.div`
    padding-top: 60px;
    @media(max-width: 768px) {
        padding-top: 30px;
    }
    .title {
        background-size: cover;
        width: 417.15px;
        height: 85.05px;
        padding: 27px 0;
        font-size: 28px;
        margin: 0 auto;
        &.verify {
            font-size: 24px;
        }
    }
    p {
        padding: 30px 100px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
    }
    @media(max-width: 768px) {
        .title {
            width: 309px;
            height: 63px;
            padding: 14px 0;
            &.verify {
                font-size: 19px;
                padding: 20px 0;
            }
        }
        p {
            font-size: 13px;
            padding: 20px 15px;
        }
    }
`;

const BusdStyle = Styled.div`
    .miner-list {
        width: 80%;
        @media(max-width: 768px) {
            width: 100%;
            // display: none;
        }
        .miner {
            width: 20%;
            img {
                width: 70%;
                
            }
            .btn {
                margin-top: 25px;
                text-transform: uppercase;
                font-weight: 900;
                background-size: cover;
                
                &.launching-soon {
                    font-size: 13px;
                    padding-top: 9px;
                }
                &.text-sm {
                    font-size: 12px;
                    padding-top: 10px;
                }
                @media(max-width: 768px) {
                    width: 65px;
                    height: 17px;
                    font-size: 7px;
                    padding-top: 3px;
                    margin-top: 11px;
                    line-height: 0.9;
                    &.launching-soon, &.text-sm {
                        font-size: 7px;
                        padding-top: 3px;
                    }   
                }
            }
        }
    }

    .hire-busd {
        margin-top: 80px;
        @media(max-width: 768px) {
            margin-top: 0;
        }
        h3 {
            line-height: 37px;
            margin: 15px 0;
            font-size: 25px;
        }
        .buy {
            .left-panel {
                img {
                    width: 50%;
                    margin: 0 auto;
                    margin-bottom: 25px;
                    @media(max-width: 768px) {
                        width: 80%;
                    }
                }
                h3 {
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 32px;
                    margin: 10px 0 0;
                }
                input {
                    width: 80%;
                    margin: 10px auto;
                    background: #FFFFFF;
                }
                button {
                    margin-bottom: 25px;
                }
            }
            .right-panel {
                .notify {
                    @media(max-width: 768px) {
                        display: none;
                    }
                    width: 80%;
                    margin: 0 auto;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    padding: 30px 25px;
                    margin-top: 40px;
                    h3 {
                        margin-bottom: 20px;
                        font-size: 20px;
                        line-height: 37px;
                    }
                    p {
                        font-size: 18px;    
                        line-height: 27px;
                    }
                    @media(max-width: 1372px) {
                        h3 {
                            line-height: 32px;
                        }
                    }
                }
                > img {
                    margin-top: 60px;
                    @media(max-width: 768px) {
                        margin-top: 30px;
                    }
                }
            }
        }
        .compound {
            margin-top: 80px;
            @media(max-width: 768px) {
                margin-top: 50px;
            }
            h3 {
                font-weight: 900;
                font-size: 25px;
                line-height: 37px;
                margin: 15px 0;
            }
            input {
                margin-top: 20px;
            }
        }
        .withdraw {
            margin-top: 80px;
            .leap {
                width: 149px;
                height: 143px;
                background-size: contain;
                background-position: center;
                display: flex;
                align-items: center;
                justify-content: center;
                h3 {
                    font-weight: 900;
                    font-size: 32px;
                    margin-top: 25px;
                }
            }
            .btn {
                margin: 50px;
            }
        }
    }
`;

const FaqButtonStyle = Styled.div`
    .container {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    a {
        border: 0;
        width: 63.12px;
        height: 56.1px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg {
        font-size: 42px;
    }
`;

const FaqStyle = Styled.div`
    .notification {
        margin-top: 50px;
        .papan {
            background-size: contain;
            background-position: center;
            text-align: center;
            background-repeat: no-repeat;
            height: 319px;
            width: 1011px;
            padding-top: 40px;
            h3 {
                font-size: 36px;
                line-height: 54px;
            }
            @media(max-width: 768px) {
                width: 377px;
                height: 119px;
                padding-top: 9px;
                h3 {
                    font-size: 18px;
                    line-height: 24px;
                }
            }
        }
    }
    .content {
        padding: 30px;
        p {
            margin-top: 120px;
            font-size: 24px;
            line-height: 36px;
        }
        @media(max-width: 768px) {
            p {
                margin-top: 0;
                font-size: 15px;
            }
        }
    }
`;

export {
    BusdStyle,
    DescriptionStyle,
    DashboardStyle,
    FaqButtonStyle,
    FaqStyle
};