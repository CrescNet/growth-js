import { ReferenceDataRow } from 'components/models'

export default {
  methods: {
    sdsFromLms(value: number, l: number, m: number, s: number): number {
      return (Math.abs(l) < 0.00001)
        ? Math.log(value / m) / s
        : ((value / m) ^ l - 1) / (l * s)
    },

    sdsFromReference(referenceData: ReferenceDataRow[], age: number, value: number): number | undefined {
      const row = this.getMatchingReferenceRow(referenceData, age)
      return !row ? undefined : this.sdsFromLms(value, row.l, row.m, row.s)
    },

    getMatchingReferenceRow(referenceData: ReferenceDataRow[], age: number): ReferenceDataRow | undefined {
      let lower = undefined as ReferenceDataRow | undefined
      let upper = undefined as ReferenceDataRow | undefined
      const index = this.binsearchPos(referenceData.map(r => r.age), age)

      if (index >= referenceData.length)
        return referenceData[-1]
      if (index === 0)
        return referenceData[0]

      if (referenceData[index].age === age) {
        return referenceData[index]
      }

      if (referenceData[index].age > age) {
        lower = referenceData[index - 1]
        upper = referenceData[index]
      }

      if (lower && upper) {
        return {
          age: age,
          l: this.approx(age, lower.age, lower.l, upper.age, upper.l),
          m: this.approx(age, lower.age, lower.m, upper.age, upper.m),
          s: this.approx(age, lower.age, lower.s, upper.age, upper.s)
        } as ReferenceDataRow
      }

      return lower
    },

    approx(x: number, lowerX: number, lowerY: number, upperX: number, upperY: number): number {
      return lowerY + (upperY - lowerY) * (x - lowerX) / (upperX - lowerX)
    },

    binsearchPos(array: number[], value: number) {
      let low = 0
      let high = array.length
      while (low < high) {
        const cur = Math.floor((high - low) / 2 + low)
        if (value > array[cur]) {
          low = cur + 1
        } else {
          high = cur
        }
      }
      return low
    }
  }
}
