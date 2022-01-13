import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    background-color: #9c0404;
    background: linear-gradient(to right, #2A0200 0%, #913E06 101.93%);
    color: #F8F7F7;
    font-family: 'Poppins';
    padding: 6px 0;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navbar {
            padding-top: 0;
            padding-bottom: 0;
            @media(min-width: 768px) {
                width: 80%;
                display: inline-block;
            }
            img {
                width: 436px;
                @media(max-width: 768px) {
                    width: 190px;
                }
            }
            a {
                float: left;
                display: block;
            }
        }
        .link {
            display: flex;
            align-items: center;
            .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 4px;
            }
            .btn-social {
                background-size: cover;
                background-color: transparent;
                border: 0;
                width: 63.12px;
                height: 56.1px;
                
                @media(max-width: 768px) {
                    width: 37px;
                    height: 32px;
                }
                svg {
                    color: #3D1900;
                    font-size: 42px;
                    @media(max-width: 768px) {
                        font-size: 22px;
                    }
                }
            }
            .btn-connect {
                font-size: 32px;
                box-sizing: border-box;
                text-transform: uppercase;
                font-weight: 900;
                background-color: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                width: 180px;
                height: auto;
                border: 0;
                @media(max-width: 768px) {
                    font-size: 16px;
                    border-width: 2px;
                    border-radius: 7px;
                    padding-right: 6px;
                    padding-left: 6px;
                    width: 109px;
                }
            }
        }
    }
`;

const FooterStyle = Styled.div`
    background-image: linear-gradient(180deg, #3D1900 0%, #913E06 100%);
    position: relative;
    padding-top: 145px;
    @media(max-width: 768px) {
        padding-top: 80px;
    }
    .footer-logo {
        width: 500px;
        @media(max-width: 768px) {
            width: 240px;
        }
    }
    .footer-faq {
        @media(max-width: 768px) {
            width: 97px;
        }
    }
    .footer-flower {
        position: absolute;
        left: 0; 
        right: 0;
        top: -320px; 
        img {
            max-width: 678px;
        }
        @media(max-width: 768px) {
            top: -180px; 
            img {
                width: 372px;
            }
        }
    }
    .require-wallet {
        padding-top: 80px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
        p {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
        }
        @media(max-width: 768px) {
            padding-top: 20px;
            p {
                font-size: 13px;
            }
        }
    }
    .smart-contract {
        border-top: 1px solid #FFC7A0;
        border-bottom: 1px solid #FFC7A0;
        padding: 10px;
        a {
            text-decoration: none;
            svg {
                margin-right: 10px;
                font-size: 16px;
            }
            font-weight: bold;
            font-size: 17px;
            line-height: 19px;
        }
    }
    .copyright {
        padding: 15px;
        margin: 0;
        font-weight: 100;
        @media(max-width: 768px) {
            font-size: 13px;
        }
    }
`;

export {
    HeaderStyle,
    FooterStyle
};