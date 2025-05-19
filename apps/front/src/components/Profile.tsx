import { SessionUser } from "@/lib/session"
import { Popover } from "@radix-ui/react-popover"
import { PopoverContent, PopoverTrigger } from "./ui/popover"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { UserIcon } from "@heroicons/react/20/solid"

type Props = {
    user: SessionUser
}
const Profile = ({user}: Props) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage src={user.avatar} /> 
                    <AvatarFallback>
                        <UserIcon className="w-8 h-8"/>
                    </AvatarFallback>
                </Avatar>
               
            </PopoverTrigger>
            <PopoverContent className="bg-white">{user.name}</PopoverContent>
        </Popover>
    )
}

export default Profile