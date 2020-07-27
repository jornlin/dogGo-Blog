module.exports = [
    {text: '首页', link: '/'},
    {
        text: 'java技术',
        link: '/java/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: '基础', items: [
                    {text: 'JDK8', link: '/1'}, // 注意link结尾有斜杠和没有斜杠的区别
                    {text: '技巧', link: '/java/skills/2018-03-25/'},
                    {text: '疑难杂症', link: '/2'},
                ]
            },
            {
                text: '框架技术', items: [
                    {text: 'SpringBoot', link: '/3'},
                    {text: 'MyBatis', link: '/4'},
                    {text: 'SpringJPA', link: '/5'},
                ]
            }
        ]
    },
    {
        text: '工具分享',
        link: '/tool/',
        items: [
            {text: '破解工具', link: '/6'},
            {text: '高分推荐', link: '/7'},
        ]
    },
    {
        text: '前端技术',
        link: '/web/',
        items: [
            {text: '技术文档', link: '/8'},
            {text: 'GitHub技巧', link: '/9'},
            {text: 'Nodejs', link: '/10'},
            {text: '博客搭建', link: '/11'},
        ]
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            {text: '学习', link: '/12'},
            {text: '面试', link: '/13'},
            {text: '心情杂货', link: '/14'},
            {text: '友情链接', link: '/friends/'},
        ]
    },
    {text: '关于', link: '/about/'},
    {
        text: '收藏',
        link: '/collect/',
        items: [
            {text: '网站', link: '/15'},
            {text: '资源', link: '/16'},
            {text: 'Vue资源', link: '/17'},
        ]
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ]
    }
];
