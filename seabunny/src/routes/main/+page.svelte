<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
	import Facts from "$lib/components/facts.svelte";
</script>

<main>
  <Breadcrumbs />

  <div id="top-cols">
    <div id="header-col">
      <Header 
        text=""
        showPet
      />
    </div>
    <div id="c-col">
      <header>
        <div>
          <span>sea bunny</span>
        </div>
        <div>
          (jorunna parva - /d͡ʒˈɔːɹʌnə pˈɑːvə/)
        </div>
      </header>
      <div id="desc">
        the&nbsp;<span style="font-weight: bold;">sea bunny</span>&nbsp;is a species of <span style="font-style: italic;">dorid nudibranch,</span>
         a shell-less marine gastropod mollusc in the family <span style="font-style: italic;">Discodorididae</span>. it was named "sea bunny" because it resembles
         a bunny, with it's pretty long ears! 
      </div>
    </div>
  </div>

  <div id="mid-cols">
    <Facts />
  </div>

  <div id="bottom-cols">
    <div id="table">
      <table>
        
        <tbody>

          <tr>
            <td>
              wt. 
            </td>
            <td>
              0.05oz
            </td>
          </tr>

          <tr>
            <td>
              size
            </td>
            <td>
              ~2cm
            </td>
          </tr>

          <tr>
            <td>
              life
            </td>
            <td>
              1yr
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</main>

<style lang="scss">
  @use "../../lib/styles/globals";

  main {
    width: 40vw; height: 100vh;

    display: flex;
    flex-direction: column;
    gap: calc(globals.$margin * 2.5);

    justify-self: center;

    min-width: 400px;
  }

  #top-cols {
    display: flex;
    flex-direction: row;
    gap: calc(globals.$margin * 2.5);
    height: 20%; width: 100%;
  }

  #mid-cols {
    display: flex;
    height: 25%; width: 100%;
  }

  #bottom-cols {
    display: flex;
    flex-direction: row;
    height: 20%; width: 100%;
  }

  #header-col {
    width: 40%; height: 100%;
  }

  #c-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    gap: calc(globals.$margin * 2.5);
    height: 100%; width: 60%;


    & #desc {
      text-align: justify; 
      text-align-last: justify;
      font-size: 1.2rem;
    }
  }

  header {
    width: 100%;

    & div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: calc(globals.$margin * 2.5);

      & span:nth-child(1) {
        font-weight: bold;
        font-size: 3rem;
        transform: scale(.8, 1.1);
        transform-origin: left;
      }
    }
  }

  #table {
    display: flex;
    flex-direction: column;

    width: 50%; height: 50%;

    gap: calc(globals.$margin * 2.5);
  }

  table {
    width: 100%; height: 100%;
  }

  tbody {
    & tr > td {
      padding: calc(globals.$margin * 2.5);
      font-size: 1.5rem;

      &:nth-child(1) {
        background: globals.$main;
        color: #fff;
      }

      &:nth-child(2) {
        border: 1px solid globals.$main;
      }
    }
    
  }
</style>