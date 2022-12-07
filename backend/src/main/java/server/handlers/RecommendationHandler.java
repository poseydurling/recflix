package server.handlers;

// Moshi imports for serializing/deserializing
import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;

// Spark Java imports for creating a server/API
import spark.Request;
import spark.Response;
import spark.Route;

public class RecommendationHandler implements Route {

  @Override
  public Object handle(Request request, Response response) throws Exception {
    // TODO: update the id with the recommended movie
    // 671 is the movie id for Harry Potter and the Philosopher's Stone
    return new RecommendationSuccessResponse(671).serialize();
  }

  /**
   * A record for a movie recommendation response when the request is valid
   *
   * @param result the result of the request; success
   * @param id the id of the movie recommended
   */
  public record RecommendationSuccessResponse(String result, int id) {
    // overload the constructor with a single parameter because the result is always success
    public RecommendationSuccessResponse(int id) {
      this("success", id);
    }

    /**
     * Converts the RecommendationSuccessResponse data into a JSON for the response
     *
     * @return a JSON-formatted String containing the result and the movie id
     */
    String serialize() {
        Moshi moshi = new Moshi.Builder().build();
        JsonAdapter<RecommendationSuccessResponse> adapter = moshi.adapter(RecommendationSuccessResponse.class);
        return adapter.toJson(this);
    }
  }
}
