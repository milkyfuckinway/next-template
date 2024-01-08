import ContainerComponent from '@/components/layout/Container';

import styles from './index.module.scss';

export default function TextComponent() {
  return (
    <ContainerComponent>
      <p className={styles.text_dynamic}>
        {[...Array(10).keys()].map(
          () =>
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed excepturi debitis ipsa nulla quod esse ad, temporibus voluptas quidem commodi dignissimos beatae incidunt deserunt possimus, mollitia voluptatum quas dicta. Porro soluta laudantium labore maiores. Quidem molestias earum illum, natus repellat amet consequatur sunt quod distinctio incidunt et, ea suscipit similique eos sit inventore, vel corrupti! Atque quidem minima suscipit. Ex nostrum tenetur neque amet earum provident tempore explicabo voluptatibus harum, quam labore ipsam ipsa porro, assumenda ratione repellendus ab ducimus quisquam a rem, odio inventore. Enim corporis iure optio. Dignissimos necessitatibus corrupti quos adipisci qui ad, magni error id, architecto, maxime neque nemo cumque esse nobis culpa dolore? Delectus blanditiis aut nemo cumque quibusdam modi? Cupiditate eius vel incidunt! Facilis ea amet optio vitae, impedit explicabo praesentium corporis, voluptatum ut illo, deserunt magnam id placeat. Dignissimos consectetur quaerat olorem quisquam! Atque eos ex illum expedita ratione. Aliquid, iusto quos? Quae aut, mollitia expedita fuga, praesentium, magni id facere laudantium perferendis dicta necessitatibus veritatis omnis nihil! Facilis ullam nobis laboriosam consequuntur aliquid cum ratione eligendi nam. Cumque voluptates dolores quisquam? Dolorum aliquid asperiores, nisi amet, consequuntur nostrum nulla laborum repellat odio ut quis non aliquam, sed reprehenderit voluptatibus natus laudantium inventore unde. Accusamus velit dolorum sit doloribus veritatis sapiente nobis. Incidunt adipisci amet enim repellat aliquam in quaerat ullam ut quisquam deserunt. Accusantium qui iusto quo assumenda, doloribus, ipsam fuga eaque sapiente temporibus voluptatem illo doloremque deserunt. Quos, totam unde! Vero ex reprehenderit excepturi pariatur quasi inventore perspiciatis, quaerat dignissimos officiis ea? Nobis quo labore quod reiciendis ratione blanditiis eaque iste officia aut, sapiente molestiae eveniet voluptatum, incidunt recusandae distinctio! Temporibus, fugit? Itaque laborum eos animi nobis officia quas saepe architecto nostrum debitis nemo, vel at dolor in quibusdam labore corrupti aut facilis quo minima distinctio sapiente, consequatur rerum soluta.'
        )}
      </p>
    </ContainerComponent>
  );
}
