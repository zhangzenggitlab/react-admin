export const getCommentList = (params: any): Promise<any> => {
    console.log(params);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: [
                {
                    id: 1,
                    name: "张三",
                    img: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
                    content:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team",
                        mySelf:false,
                        children: [{
                        id: 2,
                        name: "张三",
                        img: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
                        content:
                            "Ant Design, a design language for background applications, is refined by Ant UED Team",
                        children: [],
                        toName: "李四",
                        mySelf:true,
                    }],

                },
            ]
        })
    })

}