export const getCommentList = (params: any): Promise<any> => {
    console.log(params);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: [
                {
                    id: 1,
                    name: "张三",
                    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
                    content:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    children: [],
                    toName: "李四",
                },
            ]
        })
    })

}