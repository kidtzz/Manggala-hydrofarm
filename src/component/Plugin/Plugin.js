import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import pp from "../../img/logo.png";

export const WA = () => {
    return (
        <div id="Plugin-WA">
            <WhatsAppWidget
                phoneNo="+6288980396377"
                position="right"
                autoOpen={true}
                autoOpenTimer={5000}
                messageBox={true}
                messageBoxTxt="Hi"
                iconSize="50"
                iconColor="white"
                iconBgColor="green"
                headerIcon={pp}
                headerIconColor="white"
                headerTxtColor="white"
                headerBgColor="green"
                headerTitle="Manggala Hydrofarm"
                headerCaption="Online"
                bodyBgColor="#f2f2f2   "
                chatPersonName="Support"
                chatMessage={
                    <>
                        Hi there 👋 <br />
                        <br /> Apakah ada yang bisa kami bantu ?
                    </>
                }
                footerBgColor="#d8d6d6"
                btnBgColor="green"
                btnTxtColor="white"
            />
        </div>
    );
};
