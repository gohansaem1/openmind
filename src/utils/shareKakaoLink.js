export default function shareKakaoLink(route, userData) {
    if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init("1b7c8a284ca573f85b3d99d9219876c9");
        }

        kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: userData.name, 
                description: "너와 나의 연결고리, 오픈마인드", 
                imageUrl: `${userData.imageSource}`,
                link: {
                    mobileWebUrl: route,
                    webUrl: route,
                },
            },
            buttons: [
                {
                    title: "보러가기",
                    link: {
                        mobileWebUrl: route,
                        webUrl: route,
                    },
                },
            ],
        });
    }
}
