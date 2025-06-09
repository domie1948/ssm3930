const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmh79by/",
            name: "ssmh79by",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmh79by/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "食用菌菌棒溯源系统"
        } 
    }
}
export default base
