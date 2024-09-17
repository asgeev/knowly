import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PostForm from '@/components/forms/PostForm'
import SharedPostForm from '@/components/forms/SharedPostForm'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AddPost() {
    return (
        <Tabs defaultValue="shared-post" className="w-full max-w-[700px]">
            <TabsList>
                <TabsTrigger disabled value="post">
                    Zwykły post
                </TabsTrigger>
                <TabsTrigger value="shared-post">Udostępniony post</TabsTrigger>
            </TabsList>
            <TabsContent value="post" >
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when
                            youre done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <PostForm />
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="shared-post">
                <Card>
                    <CardHeader>
                        <CardTitle>Dodaj udostępniony post</CardTitle>
                        <CardDescription>
                            Udostępniony post pojawi się tylko dla wybranej
                            grupy osób.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <SharedPostForm />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
