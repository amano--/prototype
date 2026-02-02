// [Next.jsでStoryBookを使うもModuleNotFoundError](https://qiita.com/ymzkjpx/items/0840f99becc8039af6b1)

const path = require('path');

module.exports = ({ config }) => {
    config.resolve.alias = {
        '@/': path.resolve(__dirname, '../'),
    };

    return config;
};
