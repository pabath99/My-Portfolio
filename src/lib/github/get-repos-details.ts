import axios from "axios"

export const getRepoDetails = async () => {
  const owner = "pabath99"
  const repo = "My-Portfolio"
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`
  )

  return response.data
}
