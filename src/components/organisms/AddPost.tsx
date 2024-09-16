import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PostForm from '@/components/forms/PostForm'
import SharedPostForm from '@/components/forms/SharedPostForm'

export default function AddPost() {
    return (
        <Tabs defaultValue="shared-post" className="w-[400px]">
            <TabsList>
                <TabsTrigger disabled value="post">
                    Zwykły post
                </TabsTrigger>
                <TabsTrigger value="shared-post">Udostępniony post</TabsTrigger>
            </TabsList>
            <TabsContent value="post">
                <PostForm />
            </TabsContent>
            <TabsContent value="shared-post">
                <SharedPostForm />
            </TabsContent>
        </Tabs>
    )
}
