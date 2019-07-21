import axios from 'axios'


const url = '/api/routes/company'


class companyService {
  // GET: getting company form posts
    static getCompany() {
      return new Promise(async(resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;

          resolve(
            data.map(company => ({
              ...company,
              creatAt: newDate (image.creatAt)
            }))
          );
        } catch (err) {
          reject(err);
        }
      });
    }


//POST: posting the form records in to the database
    static insertCompanyPost(text) {
      return axios.post(url, {
        text
      });
    }

//DELETE: deleting the post of a user that is not attending

    static deleteCompanyPost(id) {
      return axios.delete(`${url}${id}`);
    }
}

export default companyService;
