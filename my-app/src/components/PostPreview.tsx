import { UserIcon } from '@heroicons/react/24/solid';

function PostPreview () {

    return (
        <div className="flex rounded bg-gray-100 h-24 shadow-md m-4" >
            <div className='flex items-middle'>
                <UserIcon className=''/>
                <p className='flex items-center'>New Post from UsernamePlaceHolder</p>
            </div>
        </div>
    )
}

export default PostPreview;