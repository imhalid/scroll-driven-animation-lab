import "./App.css";
import Carousel from "./carousel.jsx";
import Gallery from "./gallery.jsx";
import Menu from "./menu.jsx";
function App() {
  return (
    <>
      <div id="sticky-parallax-header">Scroll-Driven Animation</div>
      <div className="max-w-screen-lg mx-auto w-full h-full p-5 relative">
        <Menu />
        <div id="content">
          <div className="warning">
            <p>
              ⚠️ Your browser does not support Scroll-driven Animations. Please
              use Chrome 115 or newer.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis turpis eu neque tincidunt lacinia. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper
            orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel
            mauris vitae sem auctor cursus. Aenean sit amet odio at magna
            pharetra luctus nec eget urna. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Praesent in
            leo at tellus ultricies laoreet.
          </p>

          <p>
            Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
            aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
            molestie mi tempus vel. Etiam vitae velit eget massa scelerisque
            hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt
            diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta
            turpis.
          </p>

          <p>
            Aenean ac pellentesque ante. In hac habitasse platea dictumst.
            Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et
            malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices
            fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum
            dictum, nisl felis pulvinar dui, non dictum justo tellus a urna.
            Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus
            posuere, dictum laoreet felis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <p>
            Nam pulvinar congue condimentum. Pellentesque fringilla ante sed
            massa tincidunt feugiat. Nulla bibendum est eros, non malesuada
            dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare
            lorem, non interdum orci condimentum eu. Donec condimentum
            condimentum ligula ut placerat. Vestibulum id neque condimentum,
            molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et
            nibh non, tempor finibus erat. Nullam tristique, tortor non commodo
            cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
            Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
          </p>
          <Gallery />
          <p>
            Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
            venenatis euismod. Praesent non interdum sem. Nunc in nibh
            tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit,
            tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis
            interdum porta eu id ligula. Fusce non nisi fringilla, malesuada
            metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra
            magna vestibulum metus convallis, id mollis ligula vulputate. Sed
            purus est, consectetur non suscipit sit amet, hendrerit at dolor.
            Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra
            justo, id cursus metus nisi quis enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis turpis eu neque tincidunt lacinia. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper
            orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel
            mauris vitae sem auctor cursus. Aenean sit amet odio at magna
            pharetra luctus nec eget urna. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Praesent in
            leo at tellus ultricies laoreet.
          </p>

          <p>
            Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
            aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
            molestie mi tempus vel. Etiam vitae velit eget massa scelerisque
            hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt
            diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta
            turpis.
          </p>
          <Carousel />

          <p>
            Aenean ac pellentesque ante. In hac habitasse platea dictumst.
            Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et
            malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices
            fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum
            dictum, nisl felis pulvinar dui, non dictum justo tellus a urna.
            Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus
            posuere, dictum laoreet felis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(1000px)",
            }}
          >
            <img
              style={{
                transform: "rotateY(5deg) rotateX(30deg)",
              }}
              src="./3d/image-1.jpg"
              width={300}
              className="mx-auto"
            />
          </div>
          <p>
            Nam pulvinar congue condimentum. Pellentesque fringilla ante sed
            massa tincidunt feugiat. Nulla bibendum est eros, non malesuada
            dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare
            lorem, non interdum orci condimentum eu. Donec condimentum
            condimentum ligula ut placerat. Vestibulum id neque condimentum,
            molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et
            nibh non, tempor finibus erat. Nullam tristique, tortor non commodo
            cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
            Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
          </p>

          <p>
            Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
            venenatis euismod. Praesent non interdum sem. Nunc in nibh
            tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit,
            tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis
            interdum porta eu id ligula. Fusce non nisi fringilla, malesuada
            metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra
            magna vestibulum metus convallis, id mollis ligula vulputate. Sed
            purus est, consectetur non suscipit sit amet, hendrerit at dolor.
            Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra
            justo, id cursus metus nisi quis enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis turpis eu neque tincidunt lacinia. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper
            orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel
            mauris vitae sem auctor cursus. Aenean sit amet odio at magna
            pharetra luctus nec eget urna. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Praesent in
            leo at tellus ultricies laoreet.
          </p>

          <p>
            Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
            aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
            molestie mi tempus vel. Etiam vitae velit eget massa scelerisque
            hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt
            diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta
            turpis.
          </p>

          <p>
            Aenean ac pellentesque ante. In hac habitasse platea dictumst.
            Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et
            malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices
            fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum
            dictum, nisl felis pulvinar dui, non dictum justo tellus a urna.
            Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus
            posuere, dictum laoreet felis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <p>
            Nam pulvinar congue condimentum. Pellentesque fringilla ante sed
            massa tincidunt feugiat. Nulla bibendum est eros, non malesuada
            dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare
            lorem, non interdum orci condimentum eu. Donec condimentum
            condimentum ligula ut placerat. Vestibulum id neque condimentum,
            molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et
            nibh non, tempor finibus erat. Nullam tristique, tortor non commodo
            cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
            Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
          </p>

          <p>
            Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
            venenatis euismod. Praesent non interdum sem. Nunc in nibh
            tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit,
            tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis
            interdum porta eu id ligula. Fusce non nisi fringilla, malesuada
            metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra
            magna vestibulum metus convallis, id mollis ligula vulputate. Sed
            purus est, consectetur non suscipit sit amet, hendrerit at dolor.
            Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra
            justo, id cursus metus nisi quis enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis turpis eu neque tincidunt lacinia. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper
            orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel
            mauris vitae sem auctor cursus. Aenean sit amet odio at magna
            pharetra luctus nec eget urna. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Praesent in
            leo at tellus ultricies laoreet.
          </p>

          <p>
            Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque,
            aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut
            molestie mi tempus vel. Etiam vitae velit eget massa scelerisque
            hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt
            diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta
            turpis.
          </p>

          <p>
            Aenean ac pellentesque ante. In hac habitasse platea dictumst.
            Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et
            malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices
            fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum
            dictum, nisl felis pulvinar dui, non dictum justo tellus a urna.
            Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus
            posuere, dictum laoreet felis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <p>
            Nam pulvinar congue condimentum. Pellentesque fringilla ante sed
            massa tincidunt feugiat. Nulla bibendum est eros, non malesuada
            dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare
            lorem, non interdum orci condimentum eu. Donec condimentum
            condimentum ligula ut placerat. Vestibulum id neque condimentum,
            molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et
            nibh non, tempor finibus erat. Nullam tristique, tortor non commodo
            cursus, magna turpis rhoncus leo, quis porta quam ante sed orci.
            Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.
          </p>

          <p>
            Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus
            venenatis euismod. Praesent non interdum sem. Nunc in nibh
            tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit,
            tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis
            interdum porta eu id ligula. Fusce non nisi fringilla, malesuada
            metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra
            magna vestibulum metus convallis, id mollis ligula vulputate. Sed
            purus est, consectetur non suscipit sit amet, hendrerit at dolor.
            Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra
            justo, id cursus metus nisi quis enim.
          </p>

          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@venajeborec">Václav Pechar</a> on{" "}
            <a href="https://unsplash.com/photos/an-old-car-is-parked-in-a-field-of-tall-grass-EHt0DO1wRw8">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
