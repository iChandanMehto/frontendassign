export default function UserProfileCard({params}:any){
return(
    <div>
        <h2>Profile Page</h2>
        <span>{params.id}</span>
    </div>
)
}