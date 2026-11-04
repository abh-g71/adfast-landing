export type PostAdData = {
  path: string[]
  title: string
  price: string
  currency: string
  description: string
  terms: boolean
  promotionId: string | null
  skipPromo: boolean
}

export type StepProps = {
  data: PostAdData
  update: (patch: Partial<PostAdData>) => void
}