import Skeleton from 'react-loading-skeleton'
function quoteSkeleton(){
  return (
    <>
     <Skeleton baseColor='red' style={{
                    background: '#ccc',
                    display: 'block',
                    margin: '0 auto',
                  }} width={'100%'} height={40} count={4}/>
      </>
  )
}     
export default quoteSkeleton;  