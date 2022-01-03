import os

from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple

from jsonrpc import JSONRPCResponseManager, dispatcher

from recipe_scrapers import scrape_me


@dispatcher.add_method
def scrape_web(url: str, **kwargs):
    scraped_data = scrape_me(url)

    steps = list(
        map(
            lambda line: line.replace("\n", ""),
            list(filter(lambda line: line, scraped_data.instructions().split("."))),
        )
    )

    for idx, step in enumerate(steps):
        steps[idx] = f"{idx+1}. {step}"

    return {
        "name": scraped_data.title(),
        "completionTime": scraped_data.total_time(),
        "ingredients": scraped_data.ingredients(),
        "link": url,
        "steps": steps,
    }


@Request.application
def application(request):
    # Dispatcher is dictionary {<method_name>: callable}
    dispatcher["scrape webpage"] = scrape_web

    response = JSONRPCResponseManager.handle(request.data, dispatcher)
    return Response(response.json, mimetype="application/json")


if __name__ == "__main__":
    run_simple("localhost", os.environ.get('PORT', 578), application)
