export const ListAll = ({list}) =>{
  

    return (

        <>
                <div>
                {list && list.map((key, index) => <p>{list[index].title}</p>)}
                </div>
        </>
    )

}


