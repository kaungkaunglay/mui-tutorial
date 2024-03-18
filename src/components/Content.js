import { Box } from '@mui/material'
import React from 'react'
import ContentItem from './ContentItem'
const contentArray = [{title: 'Get things done', description: 'Reprehenderit amet dolore cillum irure proident amet commodo nisi ullamco eu duis. Ad dolor sunt sint quis veniam eiusmod culpa pariatur voluptate quis commodo in incididunt id. Excepteur aliqua proident Lorem amet nostrud. Lorem duis in dolore ullamco ex magna qui aliqua in ipsum velit consectetur ea duis. Velit ipsum tempor consequat in irure aute proident dolore ea dolor deserunt.', img: '/1.jpg'} ,
{title: 'Productivity is done', description: 'Id deserunt eiusmod nisi consequat aliqua irure. Laborum reprehenderit Lorem eiusmod fugiat qui incididunt exercitation. In non non sunt dolore esse minim dolore velit sint nisi deserunt minim est amet. Pariatur nostrud anim ipsum mollit.', img: '/2.jpg'} ,
{title: 'Fast Development', description: 'Voluptate irure quis ut eiusmod tempor incididunt anim et ea ipsum est mollit culpa. Aliqua quis dolore nisi minim dolor eiusmod qui ipsum ullamco amet fugiat non officia. Excepteur pariatur sit sunt tempor aute veniam veniam occaecat. Anim nulla id ex minim ea. Ex esse Lorem ea magna amet pariatur ea nostrud non. Esse laboris minim proident ipsum pariatur esse occaecat in do ad nisi.', img: '/3.jpg'} 
]

const Content = () => {
  return (
    <Box bgcolor={'#fbf2f2'} width={'100%'} height={'10%'} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
      {contentArray.map((Content, index) => (
        <ContentItem title={Content.title} description={Content.description} img={Content.img} key={index} swap={index%2==0} />
      ) )}
    </Box>
  )
}

export default Content