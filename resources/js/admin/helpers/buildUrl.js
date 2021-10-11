export const buildUrl = params =>  {
    let arr = [];
    Object.keys(params).forEach(function(key) {
        arr.push(`${key}=${params[key]}`)
    });
    return '?' + arr.join('&');
};
// nhiệm vụ: khi tạo param thì nó sẽ tự động thêm dấu '?' và '&' vào giữa các param