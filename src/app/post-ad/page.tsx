import { ConsoleLayout } from '@/layout/ConsoleLayout'
import { PostAdWizard } from '@/features/post-ad/PostAdWizard'

export default function PostAdPage() {
  return (
    <ConsoleLayout activeId="post-ad">
      <PostAdWizard />
    </ConsoleLayout>
  )
}