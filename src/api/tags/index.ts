import { $axios } from "../axios/index";

const tagsAsync = () => {
  return new Promise((resolve, reject) => {
    $axios({
      url: "/tags",
      method: "GET",
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export {tagsAsync}
