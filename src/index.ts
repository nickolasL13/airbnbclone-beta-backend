import app from "./app";

async function main() {
    try {

        app.listen(app.get('port'), () => {
            console.log('Express na porta', app.get('port'));
            console.log('Express no modo:', app.get('env'));
        });

    } catch (error) {
        console.log(error);
    }
}

main();


