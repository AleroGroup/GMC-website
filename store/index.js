import axios from '../plugins/axios'
export const state = () => ({
  emailProvider: {
    service: 'smtp.gmail.com',
    username: 'stephaniekirathe@gmail.com',
    password: 'teddyjames'
  }
})

export const mutations = {
  setNewEmailProvider (state, payload) {
    state.emailProvider = payload
  }
}

export const getters = {
  emailProvider (state) {
    return state.emailProvider
  }
}

export const actions = {
  async sendEmail ({state, commit}, payload) {
    console.log('smtp.gmail.com', state.emailProvider)

    let emailInfo = payload
    let emailProvider = state.emailProvider
    console.log('PayLoad', payload)
    if (emailProvider.username !== '' && emailProvider.password !== '') {
      try {
        const { res } = await axios.post('/server/nodemailer', {
          emailInfo,
          emailProvider
        })
        alert('Message send successfully')
      } catch (e) {
        alert(e)
      }
    }
  }
}
