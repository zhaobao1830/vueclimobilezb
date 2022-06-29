import pinyin from 'pinyin'

/**
 * 构造患者列表数据，返回带字母的数据
 * @param list
 */
export function structurePatientLetter(list) {
// 构造患者 Map 数据结构
  const patientMap = {}

  list.forEach((item) => {
    // 把歌手名转成拼音
    const p = pinyin(item.patName)
    if (!p || !p.length) {
      return
    }
    // 获取患者名拼音的首字母
    const key = p[0][0].slice(0, 1).toUpperCase()
    if (key) {
      if (!patientMap[key]) {
        patientMap[key] = {
          title: key,
          list: []
        }
      }
      // 每个字母下面会有多名患者
      patientMap[key].list.push(map([item])[0])
    }
  })

  // 字母患者
  const letter = []

  // 遍历处理 patientMap，让结果有序
  for (const key in patientMap) {
    const item = patientMap[key]
    if (item.title.match(/[a-zA-Z]/)) {
      letter.push(item)
    }
  }
  // 按字母顺序排序
  letter.sort((a, b) => {
    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  })

  return letter
}

// 做一层数据映射，构造单个 patient 数据结构
function map(patientList) {
  return patientList.map((item) => {
    return {
      gender: item.gender,
      idNo: item.idNo,
      patCode: item.patCode,
      patIcdName: item.patIcdName,
      patId: item.patId,
      patName: item.patName
    }
  })
}
