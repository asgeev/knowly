import { getAuthToken } from '@/lib/auth'
import { getUploadServiceUrl } from '@/lib/utils'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const token = await getAuthToken()
    const uploadUrl = getUploadServiceUrl()

    return await fetch(`${uploadUrl}/download/${params.id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
